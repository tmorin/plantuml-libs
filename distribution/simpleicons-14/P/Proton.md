# Proton


```text
simpleicons-14/P/Proton
```

```text
include('simpleicons-14/P/Proton')
```



| Illustration | Proton |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Proton.png) | ![illustration for Proton](../../simpleicons-14/P/Proton.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Proton
include('simpleicons-14/P/Proton')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Proton
include('simpleicons-14/P/Proton')

' renders the element
Proton('Proton', 'Proton', 'an optional tech label', 'an optional description')
@enduml
```

