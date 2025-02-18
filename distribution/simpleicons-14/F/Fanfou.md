# Fanfou


```text
simpleicons-14/F/Fanfou
```

```text
include('simpleicons-14/F/Fanfou')
```



| Illustration | Fanfou |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Fanfou.png) | ![illustration for Fanfou](../../simpleicons-14/F/Fanfou.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FanfouXs>`
- `<$FanfouSm>`
- `<$FanfouMd>`
- `<$FanfouLg>`





## Fanfou

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Fanfou
include('simpleicons-14/F/Fanfou')

' renders the element
Fanfou('Fanfou', 'Fanfou', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fanfou
include('simpleicons-14/F/Fanfou')

' renders the element
Fanfou('Fanfou', 'Fanfou', 'an optional tech label', 'an optional description')
@enduml
```

