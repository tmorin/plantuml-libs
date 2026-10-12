# Kimi


```text
simpleicons/K/Kimi
```

```text
include('simpleicons/K/Kimi')
```



| Illustration | Kimi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/K/Kimi.png) | ![illustration for Kimi](../../simpleicons/K/Kimi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KimiXs>`
- `<$KimiSm>`
- `<$KimiMd>`
- `<$KimiLg>`





## Kimi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Kimi
include('simpleicons/K/Kimi')

' renders the element
Kimi('Kimi', 'Kimi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kimi
include('simpleicons/K/Kimi')

' renders the element
Kimi('Kimi', 'Kimi', 'an optional tech label', 'an optional description')
@enduml
```

