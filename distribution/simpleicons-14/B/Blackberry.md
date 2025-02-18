# Blackberry


```text
simpleicons-14/B/Blackberry
```

```text
include('simpleicons-14/B/Blackberry')
```



| Illustration | Blackberry |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Blackberry.png) | ![illustration for Blackberry](../../simpleicons-14/B/Blackberry.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BlackberryXs>`
- `<$BlackberrySm>`
- `<$BlackberryMd>`
- `<$BlackberryLg>`





## Blackberry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Blackberry
include('simpleicons-14/B/Blackberry')

' renders the element
Blackberry('Blackberry', 'Blackberry', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Blackberry
include('simpleicons-14/B/Blackberry')

' renders the element
Blackberry('Blackberry', 'Blackberry', 'an optional tech label', 'an optional description')
@enduml
```

