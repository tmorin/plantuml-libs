# Apachekylin


```text
simpleicons-5/A/Apachekylin
```

```text
include('simpleicons-5/A/Apachekylin')
```



| Illustration | Apachekylin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Apachekylin.png) | ![illustration for Apachekylin](../../simpleicons-5/A/Apachekylin.Local.png) |




## Apachekylin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Apachekylin
include('simpleicons-5/A/Apachekylin')

' renders the element
Apachekylin('Apachekylin', 'Apachekylin', 'an optional tech label')
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

' loads the Item which embeds the element Apachekylin
include('simpleicons-5/A/Apachekylin')

' renders the element
Apachekylin('Apachekylin', 'Apachekylin', 'an optional tech label')
@enduml
```

