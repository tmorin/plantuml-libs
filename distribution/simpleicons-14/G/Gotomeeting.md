# Gotomeeting


```text
simpleicons-14/G/Gotomeeting
```

```text
include('simpleicons-14/G/Gotomeeting')
```



| Illustration | Gotomeeting |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Gotomeeting.png) | ![illustration for Gotomeeting](../../simpleicons-14/G/Gotomeeting.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GotomeetingXs>`
- `<$GotomeetingSm>`
- `<$GotomeetingMd>`
- `<$GotomeetingLg>`





## Gotomeeting

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Gotomeeting
include('simpleicons-14/G/Gotomeeting')

' renders the element
Gotomeeting('Gotomeeting', 'Gotomeeting', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gotomeeting
include('simpleicons-14/G/Gotomeeting')

' renders the element
Gotomeeting('Gotomeeting', 'Gotomeeting', 'an optional tech label', 'an optional description')
@enduml
```

