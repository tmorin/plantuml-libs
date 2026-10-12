# Linkvertise


```text
simpleicons/L/Linkvertise
```

```text
include('simpleicons/L/Linkvertise')
```



| Illustration | Linkvertise |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Linkvertise.png) | ![illustration for Linkvertise](../../simpleicons/L/Linkvertise.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LinkvertiseXs>`
- `<$LinkvertiseSm>`
- `<$LinkvertiseMd>`
- `<$LinkvertiseLg>`





## Linkvertise

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Linkvertise
include('simpleicons/L/Linkvertise')

' renders the element
Linkvertise('Linkvertise', 'Linkvertise', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Linkvertise
include('simpleicons/L/Linkvertise')

' renders the element
Linkvertise('Linkvertise', 'Linkvertise', 'an optional tech label', 'an optional description')
@enduml
```

