# Hevy


```text
simpleicons-14/H/Hevy
```

```text
include('simpleicons-14/H/Hevy')
```



| Illustration | Hevy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Hevy.png) | ![illustration for Hevy](../../simpleicons-14/H/Hevy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HevyXs>`
- `<$HevySm>`
- `<$HevyMd>`
- `<$HevyLg>`





## Hevy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Hevy
include('simpleicons-14/H/Hevy')

' renders the element
Hevy('Hevy', 'Hevy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hevy
include('simpleicons-14/H/Hevy')

' renders the element
Hevy('Hevy', 'Hevy', 'an optional tech label', 'an optional description')
@enduml
```

