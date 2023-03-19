# Yelp


```text
simpleicons-8/Y/Yelp
```

```text
include('simpleicons-8/Y/Yelp')
```



| Illustration | Yelp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/Y/Yelp.png) | ![illustration for Yelp](../../simpleicons-8/Y/Yelp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$YelpXs>`
- `<$YelpSm>`
- `<$YelpMd>`
- `<$YelpLg>`





## Yelp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Yelp
include('simpleicons-8/Y/Yelp')

' renders the element
Yelp('Yelp', 'Yelp', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Yelp
include('simpleicons-8/Y/Yelp')

' renders the element
Yelp('Yelp', 'Yelp', 'an optional tech label', 'an optional description')
@enduml
```

