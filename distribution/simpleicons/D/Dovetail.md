# Dovetail


```text
simpleicons/D/Dovetail
```

```text
include('simpleicons/D/Dovetail')
```



| Illustration | Dovetail |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Dovetail.png) | ![illustration for Dovetail](../../simpleicons/D/Dovetail.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DovetailXs>`
- `<$DovetailSm>`
- `<$DovetailMd>`
- `<$DovetailLg>`





## Dovetail

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Dovetail
include('simpleicons/D/Dovetail')

' renders the element
Dovetail('Dovetail', 'Dovetail', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dovetail
include('simpleicons/D/Dovetail')

' renders the element
Dovetail('Dovetail', 'Dovetail', 'an optional tech label', 'an optional description')
@enduml
```

