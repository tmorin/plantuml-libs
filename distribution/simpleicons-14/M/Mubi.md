# Mubi


```text
simpleicons-14/M/Mubi
```

```text
include('simpleicons-14/M/Mubi')
```



| Illustration | Mubi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Mubi.png) | ![illustration for Mubi](../../simpleicons-14/M/Mubi.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mubi
include('simpleicons-14/M/Mubi')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mubi
include('simpleicons-14/M/Mubi')

' renders the element
Mubi('Mubi', 'Mubi', 'an optional tech label', 'an optional description')
@enduml
```

