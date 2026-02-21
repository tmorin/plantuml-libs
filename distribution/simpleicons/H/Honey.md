# Honey


```text
simpleicons/H/Honey
```

```text
include('simpleicons/H/Honey')
```



| Illustration | Honey |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Honey.png) | ![illustration for Honey](../../simpleicons/H/Honey.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HoneyXs>`
- `<$HoneySm>`
- `<$HoneyMd>`
- `<$HoneyLg>`





## Honey

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Honey
include('simpleicons/H/Honey')

' renders the element
Honey('Honey', 'Honey', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Honey
include('simpleicons/H/Honey')

' renders the element
Honey('Honey', 'Honey', 'an optional tech label', 'an optional description')
@enduml
```

