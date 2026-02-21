# Proton


```text
simpleicons/P/Proton
```

```text
include('simpleicons/P/Proton')
```



| Illustration | Proton |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Proton.png) | ![illustration for Proton](../../simpleicons/P/Proton.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ProtonXs>`
- `<$ProtonSm>`
- `<$ProtonMd>`
- `<$ProtonLg>`





## Proton

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Proton
include('simpleicons/P/Proton')

' renders the element
Proton('Proton', 'Proton', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Proton
include('simpleicons/P/Proton')

' renders the element
Proton('Proton', 'Proton', 'an optional tech label', 'an optional description')
@enduml
```

