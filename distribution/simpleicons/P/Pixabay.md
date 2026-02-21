# Pixabay


```text
simpleicons/P/Pixabay
```

```text
include('simpleicons/P/Pixabay')
```



| Illustration | Pixabay |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Pixabay.png) | ![illustration for Pixabay](../../simpleicons/P/Pixabay.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PixabayXs>`
- `<$PixabaySm>`
- `<$PixabayMd>`
- `<$PixabayLg>`





## Pixabay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Pixabay
include('simpleicons/P/Pixabay')

' renders the element
Pixabay('Pixabay', 'Pixabay', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pixabay
include('simpleicons/P/Pixabay')

' renders the element
Pixabay('Pixabay', 'Pixabay', 'an optional tech label', 'an optional description')
@enduml
```

