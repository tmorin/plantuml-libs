# Spotlight


```text
simpleicons-7/S/Spotlight
```

```text
include('simpleicons-7/S/Spotlight')
```



| Illustration | Spotlight |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Spotlight.png) | ![illustration for Spotlight](../../simpleicons-7/S/Spotlight.Local.png) |




## Spotlight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Spotlight
include('simpleicons-7/S/Spotlight')

' renders the element
Spotlight('Spotlight', 'Spotlight', 'an optional tech label')
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

' loads the Item which embeds the element Spotlight
include('simpleicons-7/S/Spotlight')

' renders the element
Spotlight('Spotlight', 'Spotlight', 'an optional tech label')
@enduml
```

