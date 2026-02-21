# Nextra


```text
simpleicons/N/Nextra
```

```text
include('simpleicons/N/Nextra')
```



| Illustration | Nextra |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Nextra.png) | ![illustration for Nextra](../../simpleicons/N/Nextra.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NextraXs>`
- `<$NextraSm>`
- `<$NextraMd>`
- `<$NextraLg>`





## Nextra

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Nextra
include('simpleicons/N/Nextra')

' renders the element
Nextra('Nextra', 'Nextra', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Nextra
include('simpleicons/N/Nextra')

' renders the element
Nextra('Nextra', 'Nextra', 'an optional tech label', 'an optional description')
@enduml
```

