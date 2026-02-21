# Vyond


```text
simpleicons/V/Vyond
```

```text
include('simpleicons/V/Vyond')
```



| Illustration | Vyond |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/V/Vyond.png) | ![illustration for Vyond](../../simpleicons/V/Vyond.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VyondXs>`
- `<$VyondSm>`
- `<$VyondMd>`
- `<$VyondLg>`





## Vyond

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Vyond
include('simpleicons/V/Vyond')

' renders the element
Vyond('Vyond', 'Vyond', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vyond
include('simpleicons/V/Vyond')

' renders the element
Vyond('Vyond', 'Vyond', 'an optional tech label', 'an optional description')
@enduml
```

