# Wagtail


```text
simpleicons-14/W/Wagtail
```

```text
include('simpleicons-14/W/Wagtail')
```



| Illustration | Wagtail |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/W/Wagtail.png) | ![illustration for Wagtail](../../simpleicons-14/W/Wagtail.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WagtailXs>`
- `<$WagtailSm>`
- `<$WagtailMd>`
- `<$WagtailLg>`





## Wagtail

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Wagtail
include('simpleicons-14/W/Wagtail')

' renders the element
Wagtail('Wagtail', 'Wagtail', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wagtail
include('simpleicons-14/W/Wagtail')

' renders the element
Wagtail('Wagtail', 'Wagtail', 'an optional tech label', 'an optional description')
@enduml
```

