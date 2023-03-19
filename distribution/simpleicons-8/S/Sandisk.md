# Sandisk


```text
simpleicons-8/S/Sandisk
```

```text
include('simpleicons-8/S/Sandisk')
```



| Illustration | Sandisk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Sandisk.png) | ![illustration for Sandisk](../../simpleicons-8/S/Sandisk.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SandiskXs>`
- `<$SandiskSm>`
- `<$SandiskMd>`
- `<$SandiskLg>`





## Sandisk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Sandisk
include('simpleicons-8/S/Sandisk')

' renders the element
Sandisk('Sandisk', 'Sandisk', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Sandisk
include('simpleicons-8/S/Sandisk')

' renders the element
Sandisk('Sandisk', 'Sandisk', 'an optional tech label', 'an optional description')
@enduml
```

