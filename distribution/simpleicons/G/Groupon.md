# Groupon


```text
simpleicons/G/Groupon
```

```text
include('simpleicons/G/Groupon')
```



| Illustration | Groupon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Groupon.png) | ![illustration for Groupon](../../simpleicons/G/Groupon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GrouponXs>`
- `<$GrouponSm>`
- `<$GrouponMd>`
- `<$GrouponLg>`





## Groupon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Groupon
include('simpleicons/G/Groupon')

' renders the element
Groupon('Groupon', 'Groupon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Groupon
include('simpleicons/G/Groupon')

' renders the element
Groupon('Groupon', 'Groupon', 'an optional tech label', 'an optional description')
@enduml
```

