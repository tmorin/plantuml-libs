# Majorleaguehacking


```text
simpleicons-14/M/Majorleaguehacking
```

```text
include('simpleicons-14/M/Majorleaguehacking')
```



| Illustration | Majorleaguehacking |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Majorleaguehacking.png) | ![illustration for Majorleaguehacking](../../simpleicons-14/M/Majorleaguehacking.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MajorleaguehackingXs>`
- `<$MajorleaguehackingSm>`
- `<$MajorleaguehackingMd>`
- `<$MajorleaguehackingLg>`





## Majorleaguehacking

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Majorleaguehacking
include('simpleicons-14/M/Majorleaguehacking')

' renders the element
Majorleaguehacking('Majorleaguehacking', 'Majorleaguehacking', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Majorleaguehacking
include('simpleicons-14/M/Majorleaguehacking')

' renders the element
Majorleaguehacking('Majorleaguehacking', 'Majorleaguehacking', 'an optional tech label', 'an optional description')
@enduml
```

