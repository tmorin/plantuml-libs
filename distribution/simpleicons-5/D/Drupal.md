# Drupal


```text
simpleicons-5/D/Drupal
```

```text
include('simpleicons-5/D/Drupal')
```



| Illustration | Drupal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Drupal.png) | ![illustration for Drupal](../../simpleicons-5/D/Drupal.Local.png) |




## Drupal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Drupal
include('simpleicons-5/D/Drupal')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Drupal
include('simpleicons-5/D/Drupal')

' renders the element
Drupal('Drupal', 'Drupal', 'an optional tech label')
@enduml
```

