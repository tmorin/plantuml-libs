# Bookmyshow


```text
simpleicons-8/B/Bookmyshow
```

```text
include('simpleicons-8/B/Bookmyshow')
```



| Illustration | Bookmyshow |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/B/Bookmyshow.png) | ![illustration for Bookmyshow](../../simpleicons-8/B/Bookmyshow.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BookmyshowXs>`
- `<$BookmyshowSm>`
- `<$BookmyshowMd>`
- `<$BookmyshowLg>`





## Bookmyshow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Bookmyshow
include('simpleicons-8/B/Bookmyshow')

' renders the element
Bookmyshow('Bookmyshow', 'Bookmyshow', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bookmyshow
include('simpleicons-8/B/Bookmyshow')

' renders the element
Bookmyshow('Bookmyshow', 'Bookmyshow', 'an optional tech label', 'an optional description')
@enduml
```

