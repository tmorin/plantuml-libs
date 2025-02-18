# Tubi


```text
simpleicons-14/T/Tubi
```

```text
include('simpleicons-14/T/Tubi')
```



| Illustration | Tubi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Tubi.png) | ![illustration for Tubi](../../simpleicons-14/T/Tubi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TubiXs>`
- `<$TubiSm>`
- `<$TubiMd>`
- `<$TubiLg>`





## Tubi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Tubi
include('simpleicons-14/T/Tubi')

' renders the element
Tubi('Tubi', 'Tubi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tubi
include('simpleicons-14/T/Tubi')

' renders the element
Tubi('Tubi', 'Tubi', 'an optional tech label', 'an optional description')
@enduml
```

