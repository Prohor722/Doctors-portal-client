import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: services, isLoading } = useQuery("services", () =>
    fetch("https://intense-badlands-42287.herokuapp.com/services").then((res) =>
      res.json()
    )
  );

  const imageStorageKey = "babbbc32e0d550e6d017e38db2462b2b";

  //   console.log(services)
  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
          };
          // send to database

          fetch("https://intense-badlands-42287.herokuapp.com/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Doctor added successfully");
                reset();
              } else {
                toast.error("Filed to add the doctor");
              }
            });
        }
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2>Add Doctor</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required.",
              },
              minLength: {
                value: 3,
                message: "Please use your name.",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "minLength" && (
              <span className="label-text-alt text-red-600">
                {errors.name.message}
              </span>
            )}
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full max-w-xs"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /[a-z0-9]+\.[a-z]{2,3}/,
                message: "Email is not valid.",
              },
            })}
          />
          <label className="label">
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-600">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select
            {...register("specialty")}
            className="select select-bordered w-full max-w-xs"
          >
            {services.map((service) => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            className="input input-bordered w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "Image is required.",
              },
            })}
          />
          <label className="label">
            {errors.image?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.image.message}
              </span>
            )}
          </label>
        </div>

        <input type="submit" className="btn w-full max-w-xs mt-8" value="add" />
      </form>
    </div>
  );
};

export default AddDoctor;
