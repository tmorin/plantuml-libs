# Aral


```text
simpleicons-8/A/Aral
```

```text
include('simpleicons-8/A/Aral')
```



| Illustration | Aral |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Aral.png) | ![illustration for Aral](../../simpleicons-8/A/Aral.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AralXs>`
- `<$AralSm>`
- `<$AralMd>`
- `<$AralLg>`





## Aral

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Aral
include('simpleicons-8/A/Aral')

' renders the element
Aral('Aral', 'Aral', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Aral
include('simpleicons-8/A/Aral')

' renders the element
Aral('Aral', 'Aral', 'an optional tech label', 'an optional description')
@enduml
```

