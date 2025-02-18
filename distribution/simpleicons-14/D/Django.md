# Django


```text
simpleicons-14/D/Django
```

```text
include('simpleicons-14/D/Django')
```



| Illustration | Django |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Django.png) | ![illustration for Django](../../simpleicons-14/D/Django.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DjangoXs>`
- `<$DjangoSm>`
- `<$DjangoMd>`
- `<$DjangoLg>`





## Django

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Django
include('simpleicons-14/D/Django')

' renders the element
Django('Django', 'Django', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Django
include('simpleicons-14/D/Django')

' renders the element
Django('Django', 'Django', 'an optional tech label', 'an optional description')
@enduml
```

