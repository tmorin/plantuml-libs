# Imagej


```text
simpleicons-5/I/Imagej
```

```text
include('simpleicons-5/I/Imagej')
```



| Illustration | Imagej |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/I/Imagej.png) | ![illustration for Imagej](../../simpleicons-5/I/Imagej.Local.png) |




## Imagej

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Imagej
include('simpleicons-5/I/Imagej')

' renders the element
Imagej('Imagej', 'Imagej', 'an optional tech label')
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

' loads the Item which embeds the element Imagej
include('simpleicons-5/I/Imagej')

' renders the element
Imagej('Imagej', 'Imagej', 'an optional tech label')
@enduml
```

