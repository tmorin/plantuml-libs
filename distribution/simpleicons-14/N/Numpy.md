# Numpy


```text
simpleicons-14/N/Numpy
```

```text
include('simpleicons-14/N/Numpy')
```



| Illustration | Numpy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Numpy.png) | ![illustration for Numpy](../../simpleicons-14/N/Numpy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NumpyXs>`
- `<$NumpySm>`
- `<$NumpyMd>`
- `<$NumpyLg>`





## Numpy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Numpy
include('simpleicons-14/N/Numpy')

' renders the element
Numpy('Numpy', 'Numpy', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Numpy
include('simpleicons-14/N/Numpy')

' renders the element
Numpy('Numpy', 'Numpy', 'an optional tech label', 'an optional description')
@enduml
```

