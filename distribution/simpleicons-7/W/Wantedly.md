# Wantedly


```text
simpleicons-7/W/Wantedly
```

```text
include('simpleicons-7/W/Wantedly')
```



| Illustration | Wantedly |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/W/Wantedly.png) | ![illustration for Wantedly](../../simpleicons-7/W/Wantedly.Local.png) |




## Wantedly

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Wantedly
include('simpleicons-7/W/Wantedly')

' renders the element
Wantedly('Wantedly', 'Wantedly', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wantedly
include('simpleicons-7/W/Wantedly')

' renders the element
Wantedly('Wantedly', 'Wantedly', 'an optional tech label', 'an optional description')
@enduml
```

