# Jpeg


```text
simpleicons-7/J/Jpeg
```

```text
include('simpleicons-7/J/Jpeg')
```



| Illustration | Jpeg |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/J/Jpeg.png) | ![illustration for Jpeg](../../simpleicons-7/J/Jpeg.Local.png) |




## Jpeg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Jpeg
include('simpleicons-7/J/Jpeg')

' renders the element
Jpeg('Jpeg', 'Jpeg', 'an optional tech label')
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

' loads the Item which embeds the element Jpeg
include('simpleicons-7/J/Jpeg')

' renders the element
Jpeg('Jpeg', 'Jpeg', 'an optional tech label')
@enduml
```

