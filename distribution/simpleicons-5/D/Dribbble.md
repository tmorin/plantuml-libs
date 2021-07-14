# Dribbble


```text
simpleicons-5/D/Dribbble
```

```text
include('simpleicons-5/D/Dribbble')
```



| Illustration | Dribbble |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Dribbble.png) | ![illustration for Dribbble](../../simpleicons-5/D/Dribbble.Local.png) |




## Dribbble

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Dribbble
include('simpleicons-5/D/Dribbble')

' renders the element
Dribbble('Dribbble', 'Dribbble', 'an optional tech label')
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

' loads the Item which embeds the element Dribbble
include('simpleicons-5/D/Dribbble')

' renders the element
Dribbble('Dribbble', 'Dribbble', 'an optional tech label')
@enduml
```

