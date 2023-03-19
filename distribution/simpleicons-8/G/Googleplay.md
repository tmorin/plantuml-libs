# Googleplay


```text
simpleicons-8/G/Googleplay
```

```text
include('simpleicons-8/G/Googleplay')
```



| Illustration | Googleplay |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Googleplay.png) | ![illustration for Googleplay](../../simpleicons-8/G/Googleplay.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GoogleplayXs>`
- `<$GoogleplaySm>`
- `<$GoogleplayMd>`
- `<$GoogleplayLg>`





## Googleplay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Googleplay
include('simpleicons-8/G/Googleplay')

' renders the element
Googleplay('Googleplay', 'Googleplay', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Googleplay
include('simpleicons-8/G/Googleplay')

' renders the element
Googleplay('Googleplay', 'Googleplay', 'an optional tech label', 'an optional description')
@enduml
```

