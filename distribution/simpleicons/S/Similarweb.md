# Similarweb


```text
simpleicons/S/Similarweb
```

```text
include('simpleicons/S/Similarweb')
```



| Illustration | Similarweb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Similarweb.png) | ![illustration for Similarweb](../../simpleicons/S/Similarweb.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SimilarwebXs>`
- `<$SimilarwebSm>`
- `<$SimilarwebMd>`
- `<$SimilarwebLg>`





## Similarweb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Similarweb
include('simpleicons/S/Similarweb')

' renders the element
Similarweb('Similarweb', 'Similarweb', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Similarweb
include('simpleicons/S/Similarweb')

' renders the element
Similarweb('Similarweb', 'Similarweb', 'an optional tech label', 'an optional description')
@enduml
```

