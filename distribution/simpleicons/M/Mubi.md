# Mubi


```text
simpleicons/M/Mubi
```

```text
include('simpleicons/M/Mubi')
```



| Illustration | Mubi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Mubi.png) | ![illustration for Mubi](../../simpleicons/M/Mubi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MubiXs>`
- `<$MubiSm>`
- `<$MubiMd>`
- `<$MubiLg>`





## Mubi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Mubi
include('simpleicons/M/Mubi')

' renders the element
Mubi('Mubi', 'Mubi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mubi
include('simpleicons/M/Mubi')

' renders the element
Mubi('Mubi', 'Mubi', 'an optional tech label', 'an optional description')
@enduml
```

