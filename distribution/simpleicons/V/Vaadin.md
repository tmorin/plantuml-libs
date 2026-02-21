# Vaadin


```text
simpleicons/V/Vaadin
```

```text
include('simpleicons/V/Vaadin')
```



| Illustration | Vaadin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/V/Vaadin.png) | ![illustration for Vaadin](../../simpleicons/V/Vaadin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VaadinXs>`
- `<$VaadinSm>`
- `<$VaadinMd>`
- `<$VaadinLg>`





## Vaadin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Vaadin
include('simpleicons/V/Vaadin')

' renders the element
Vaadin('Vaadin', 'Vaadin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vaadin
include('simpleicons/V/Vaadin')

' renders the element
Vaadin('Vaadin', 'Vaadin', 'an optional tech label', 'an optional description')
@enduml
```

