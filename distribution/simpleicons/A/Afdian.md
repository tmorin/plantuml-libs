# Afdian


```text
simpleicons/A/Afdian
```

```text
include('simpleicons/A/Afdian')
```



| Illustration | Afdian |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Afdian.png) | ![illustration for Afdian](../../simpleicons/A/Afdian.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AfdianXs>`
- `<$AfdianSm>`
- `<$AfdianMd>`
- `<$AfdianLg>`





## Afdian

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Afdian
include('simpleicons/A/Afdian')

' renders the element
Afdian('Afdian', 'Afdian', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Afdian
include('simpleicons/A/Afdian')

' renders the element
Afdian('Afdian', 'Afdian', 'an optional tech label', 'an optional description')
@enduml
```

