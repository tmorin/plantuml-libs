# Bt


```text
simpleicons/B/Bt
```

```text
include('simpleicons/B/Bt')
```



| Illustration | Bt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Bt.png) | ![illustration for Bt](../../simpleicons/B/Bt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BtXs>`
- `<$BtSm>`
- `<$BtMd>`
- `<$BtLg>`





## Bt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Bt
include('simpleicons/B/Bt')

' renders the element
Bt('Bt', 'Bt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bt
include('simpleicons/B/Bt')

' renders the element
Bt('Bt', 'Bt', 'an optional tech label', 'an optional description')
@enduml
```

