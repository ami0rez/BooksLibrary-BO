using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Exceptions
{
    [Serializable]
    public class RecordNotFoundException : Exception
    {
        public RecordNotFoundException() { }
        public RecordNotFoundException(string message) : base(message) { }
        public RecordNotFoundException(string message, Exception inner) : base(message, inner) { }
        protected RecordNotFoundException(
          System.Runtime.Serialization.SerializationInfo info,
          System.Runtime.Serialization.StreamingContext context) : base(info, context) { }
    }
}
