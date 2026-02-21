# Java


```text
fontawesome/Brands/Java
```

```text
include('fontawesome/Brands/Java')
```



| Illustration | Java |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Java.png) | ![illustration for Java](../../fontawesome/Brands/Java.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JavaXs>`
- `<$JavaSm>`
- `<$JavaMd>`
- `<$JavaLg>`





## Java

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Java
include('fontawesome/Brands/Java')

' renders the element
Java('Java', 'Java', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Java
include('fontawesome/Brands/Java')

' renders the element
Java('Java', 'Java', 'an optional tech label', 'an optional description')
@enduml
```

