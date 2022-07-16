# Numpy


```text
simpleicons-7/N/Numpy
```

```text
include('simpleicons-7/N/Numpy')
```



| Illustration | Numpy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/N/Numpy.png) | ![illustration for Numpy](../../simpleicons-7/N/Numpy.Local.png) |




## Numpy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Numpy
include('simpleicons-7/N/Numpy')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Numpy
include('simpleicons-7/N/Numpy')

' renders the element
Numpy('Numpy', 'Numpy', 'an optional tech label')
@enduml
```

