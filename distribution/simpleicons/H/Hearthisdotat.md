# Hearthisdotat


```text
simpleicons/H/Hearthisdotat
```

```text
include('simpleicons/H/Hearthisdotat')
```



| Illustration | Hearthisdotat |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Hearthisdotat.png) | ![illustration for Hearthisdotat](../../simpleicons/H/Hearthisdotat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HearthisdotatXs>`
- `<$HearthisdotatSm>`
- `<$HearthisdotatMd>`
- `<$HearthisdotatLg>`





## Hearthisdotat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Hearthisdotat
include('simpleicons/H/Hearthisdotat')

' renders the element
Hearthisdotat('Hearthisdotat', 'Hearthisdotat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hearthisdotat
include('simpleicons/H/Hearthisdotat')

' renders the element
Hearthisdotat('Hearthisdotat', 'Hearthisdotat', 'an optional tech label', 'an optional description')
@enduml
```

