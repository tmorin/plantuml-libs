# Mautic


```text
simpleicons/M/Mautic
```

```text
include('simpleicons/M/Mautic')
```



| Illustration | Mautic |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Mautic.png) | ![illustration for Mautic](../../simpleicons/M/Mautic.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MauticXs>`
- `<$MauticSm>`
- `<$MauticMd>`
- `<$MauticLg>`





## Mautic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Mautic
include('simpleicons/M/Mautic')

' renders the element
Mautic('Mautic', 'Mautic', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mautic
include('simpleicons/M/Mautic')

' renders the element
Mautic('Mautic', 'Mautic', 'an optional tech label', 'an optional description')
@enduml
```

