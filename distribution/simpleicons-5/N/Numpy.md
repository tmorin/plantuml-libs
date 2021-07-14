# Numpy


```text
simpleicons-5/N/Numpy
```

```text
include('simpleicons-5/N/Numpy')
```



| Illustration | Numpy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/N/Numpy.png) | ![illustration for Numpy](../../simpleicons-5/N/Numpy.Local.png) |




## Numpy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Numpy
include('simpleicons-5/N/Numpy')

' renders the element
Numpy('Numpy', 'Numpy', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Numpy
include('simpleicons-5/N/Numpy')

' renders the element
Numpy('Numpy', 'Numpy', 'an optional tech label')
@enduml
```

