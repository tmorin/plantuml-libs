# Aws


```text
fontawesome-5/Brands/Aws
```

```text
include('fontawesome-5/Brands/Aws')
```



| Illustration | Aws |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Aws.png) | ![illustration for Aws](../../fontawesome-5/Brands/Aws.Local.png) |




## Aws

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Aws
include('fontawesome-5/Brands/Aws')

' renders the element
Aws('Aws', 'Aws', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Aws
include('fontawesome-5/Brands/Aws')

' renders the element
Aws('Aws', 'Aws', 'an optional tech label')
@enduml
```

