# Weblate


```text
simpleicons-14/W/Weblate
```

```text
include('simpleicons-14/W/Weblate')
```



| Illustration | Weblate |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/W/Weblate.png) | ![illustration for Weblate](../../simpleicons-14/W/Weblate.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WeblateXs>`
- `<$WeblateSm>`
- `<$WeblateMd>`
- `<$WeblateLg>`





## Weblate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Weblate
include('simpleicons-14/W/Weblate')

' renders the element
Weblate('Weblate', 'Weblate', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Weblate
include('simpleicons-14/W/Weblate')

' renders the element
Weblate('Weblate', 'Weblate', 'an optional tech label', 'an optional description')
@enduml
```

