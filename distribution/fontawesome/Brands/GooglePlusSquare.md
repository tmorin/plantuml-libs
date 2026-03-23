# GooglePlusSquare


```text
fontawesome/Brands/GooglePlusSquare
```

```text
include('fontawesome/Brands/GooglePlusSquare')
```



| Illustration | GooglePlusSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/GooglePlusSquare.png) | ![illustration for GooglePlusSquare](../../fontawesome/Brands/GooglePlusSquare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GooglePlusSquareXs>`
- `<$GooglePlusSquareSm>`
- `<$GooglePlusSquareMd>`
- `<$GooglePlusSquareLg>`





## GooglePlusSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GooglePlusSquare
include('fontawesome/Brands/GooglePlusSquare')

' renders the element
GooglePlusSquare('GooglePlusSquare', 'Google Plus Square', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element GooglePlusSquare
include('fontawesome/Brands/GooglePlusSquare')

' renders the element
GooglePlusSquare('GooglePlusSquare', 'Google Plus Square', 'an optional tech label', 'an optional description')
@enduml
```

