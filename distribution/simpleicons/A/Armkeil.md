# Armkeil


```text
simpleicons/A/Armkeil
```

```text
include('simpleicons/A/Armkeil')
```



| Illustration | Armkeil |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Armkeil.png) | ![illustration for Armkeil](../../simpleicons/A/Armkeil.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArmkeilXs>`
- `<$ArmkeilSm>`
- `<$ArmkeilMd>`
- `<$ArmkeilLg>`





## Armkeil

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Armkeil
include('simpleicons/A/Armkeil')

' renders the element
Armkeil('Armkeil', 'Armkeil', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Armkeil
include('simpleicons/A/Armkeil')

' renders the element
Armkeil('Armkeil', 'Armkeil', 'an optional tech label', 'an optional description')
@enduml
```

