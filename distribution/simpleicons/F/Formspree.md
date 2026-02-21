# Formspree


```text
simpleicons/F/Formspree
```

```text
include('simpleicons/F/Formspree')
```



| Illustration | Formspree |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Formspree.png) | ![illustration for Formspree](../../simpleicons/F/Formspree.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FormspreeXs>`
- `<$FormspreeSm>`
- `<$FormspreeMd>`
- `<$FormspreeLg>`





## Formspree

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Formspree
include('simpleicons/F/Formspree')

' renders the element
Formspree('Formspree', 'Formspree', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Formspree
include('simpleicons/F/Formspree')

' renders the element
Formspree('Formspree', 'Formspree', 'an optional tech label', 'an optional description')
@enduml
```

