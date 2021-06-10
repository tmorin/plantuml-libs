# Drupal


```text
fontawesome-5/Brands/Drupal
```

```text
include('fontawesome-5/Brands/Drupal')
```



| Illustration | Drupal |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Drupal.png) | ![illustration for Drupal](../../fontawesome-5/Brands/Drupal.Local.png) |




## Drupal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Drupal
include('fontawesome-5/Brands/Drupal')

' renders the element
Drupal('Drupal', 'Drupal', 'an optional tech label')
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

' loads the Item which embeds the element Drupal
include('fontawesome-5/Brands/Drupal')

' renders the element
Drupal('Drupal', 'Drupal', 'an optional tech label')
@enduml
```

