import loading from '../../public/images/loading.gif';

export default function Loading() {
  return (
    <div class="text-center justify-content-center">
      <img src={loading} alt="loading" height={75} width={75} />
    </div>
  );
}
