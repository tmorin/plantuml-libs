# Accusoft


```text
fontawesome-6/Brands/Accusoft
```

```text
include('fontawesome-6/Brands/Accusoft')
```



| Illustration | Accusoft |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Accusoft.png) | ![illustration for Accusoft](../../fontawesome-6/Brands/Accusoft.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AccusoftXs>`
- `<$AccusoftSm>`
- `<$AccusoftMd>`
- `<$AccusoftLg>`





## Accusoft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Accusoft
include('fontawesome-6/Brands/Accusoft')

' renders the element
Accusoft('Accusoft', 'Accusoft', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Accusoft
include('fontawesome-6/Brands/Accusoft')

' renders the element
Accusoft('Accusoft', 'Accusoft', 'an optional tech label', 'an optional description')
@enduml
```

