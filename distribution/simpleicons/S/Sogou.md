# Sogou


```text
simpleicons/S/Sogou
```

```text
include('simpleicons/S/Sogou')
```



| Illustration | Sogou |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Sogou.png) | ![illustration for Sogou](../../simpleicons/S/Sogou.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SogouXs>`
- `<$SogouSm>`
- `<$SogouMd>`
- `<$SogouLg>`





## Sogou

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Sogou
include('simpleicons/S/Sogou')

' renders the element
Sogou('Sogou', 'Sogou', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sogou
include('simpleicons/S/Sogou')

' renders the element
Sogou('Sogou', 'Sogou', 'an optional tech label', 'an optional description')
@enduml
```

