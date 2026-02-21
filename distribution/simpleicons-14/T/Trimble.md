# Trimble


```text
simpleicons-14/T/Trimble
```

```text
include('simpleicons-14/T/Trimble')
```



| Illustration | Trimble |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Trimble.png) | ![illustration for Trimble](../../simpleicons-14/T/Trimble.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TrimbleXs>`
- `<$TrimbleSm>`
- `<$TrimbleMd>`
- `<$TrimbleLg>`





## Trimble

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Trimble
include('simpleicons-14/T/Trimble')

' renders the element
Trimble('Trimble', 'Trimble', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Trimble
include('simpleicons-14/T/Trimble')

' renders the element
Trimble('Trimble', 'Trimble', 'an optional tech label', 'an optional description')
@enduml
```

